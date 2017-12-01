'use strict'

const _ = require('lodash')
const p2r = require('path-to-regexp')

/**
 * Returns true or false if the user have permission to access to service, resource and method
 *
 * @param  {Collection} `aclList`
 * @param  {String} `user`
 * @param  {String} `service`
 * @param  {String} `resource``
 * @param  {String} `method`
 * @return {Boolean}
 */
var CheckAcl = module.exports = function CheckAcl(aclList, user, service, resource, method) {
  // Filter by service
  let filtered = _.filter(list, function (o) {
    return o.service === service || o.service === '*'
  })
  // Exit if no match
  if (filtered.length === 0) return false

  // Exit if have deny rule for all resources and all methods
  let deny = _.filter(filtered, function (o) {
    return o.method === '*' && o.resource === '*'
  })

  if (deny.length > 0) return false

  // Sort with deny first
  let sorted = _.sortBy(filtered, function (o) { return o.action === 'deny' })

  // Find matches by resource
  let matches = _.filter(sorted, function (o) {
    if (o.resource === '*') return true
    var re = p2r(o.resource)
    let res = re.exec(resource)
    return res != null
  })

  // Filter By Method
  let byMethod = _.filter(matches, function (o) {
    if (o.methods === '*') return true
    let m = _.filter(o.methods, function (m) {
      return m === method
    })
    return m.length > 0
  })

  let matchesDeny = _.filter(byMethod, function (o) {
    return o.action === 'deny'
  })

  if (matchesDeny.length > 0) return false

  let matchesAllow = _.filter(byMethod, function (o) {
    return o.action === 'allow'
  })

  if (matchesAllow.length > 0) return true

  return false
} 