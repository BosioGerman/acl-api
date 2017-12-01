'use strict'

const _ = require('lodash')
const p2r = require('path-to-regexp')

module.exports = {
  CheckAcl (userAclList, service, resource, method) {
  // Filter by service
    let filtered = _.filter(userAclList, function (o) {
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
}
