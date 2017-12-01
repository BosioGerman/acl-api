'use strict'

const _ = require('lodash')
const p2r = require('path-to-regexp')

module.exports = {
  CheckUserAcl (userAclList, endpoint, resource, method) {
    // Filter by endpoint
    let byEndpoint = _.filter(userAclList, (o) => o.endpoint === endpoint || o.endpoint === '*')
    // Exit if no match
    if (byEndpoint.length === 0) return false

    // Exit if have deny rule for all resources and all methods
    if (_.filter(byEndpoint, (o) => o.action === 'deny' && o.method === '*' && o.resource === '*').length > 0) return false

    // Sort with deny first
    let sorted = _.sortBy(byEndpoint, (o) => o.action === 'deny')

    // Find matches by resource
    let byResource = _.filter(sorted, function (o) {
      if (o.resource === '*') return true
      var re = p2r(o.resource)
      return re.exec(resource) != null
    })

    // Filter By Method
    let byMethod = _.filter(byResource, function (o) {
      if (o.methods === '*') return true
      return _.filter(o.methods, (m) => m === method).length > 0
    })

    if (_.filter(byMethod, (o) => o.action === 'deny').length > 0) return false

    if (_.filter(byMethod, (o) => o.action === 'allow').length > 0) return true

    return false
  }
}
