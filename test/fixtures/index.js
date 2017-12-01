module.exports = {
  get_guest_acl () {
    return [
      {
        id: '5a204f4b377af6994a53b030',
        user: '5a204a2efb2ae988244c4a17',
        endpoint: '*',
        resource: '*',
        methods: '*',
        action: 'deny',
        comment: 'Deny all to guest'
      }
    ]
  },
  get_root_acl () {
    return [
      {
        id: '5a204f6e377af6994a53b031',
        user: '5a1da2a5c7a175901988b5b9',
        endpoint: '*',
        resource: '*',
        methods: '*',
        action: 'allow',
        comment: 'Allow all to root'
      }
    ]
  },
  get_spooler_acl () {
    return [
      {
        id: '5a204ff0377af6994a53b033',
        user: '5a204a3ffb2ae988244c4a18',
        endpoint: 'service1.server.com',
        resource: '/spooler/:id/afip/wsfe/:apikey/wsaa',
        methods: ['GET'],
        action: 'allow',
        comment: 'Allow get afip tiket to spooler'
      },
      {
        id: '5a20502f377af6994a53b034',
        user: '5a204a3ffb2ae988244c4a18',
        endpoint: 'service1.server.com',
        resource: '/spooler/:id',
        methods: ['GET', 'POST', 'PUT', 'PATCH'],
        action: 'allow',
        comment: 'Allow to spooler read and write spooler data'
      }
    ]
  },
  get_service1_admin_acl () {
    return [
      {
        id: '5a20507a377af6994a53b035',
        user: '5a204a4dfb2ae988244c4a19',
        endpoint: 'service1.server.com',
        resource: '*',
        methods: '*',
        action: 'allow',
        comment: 'Allow all on service1.server.com to service1_admin user'
      }
    ]
  },
  get_service1_user_acl () {
    return [
      {
        id: '5a2050af377af6994a53b036',
        user: '5a204a57fb2ae988244c4a1a',
        endpoint: 'service1.server.com',
        resource: '/spooler/:id',
        methods: ['GET'],
        action: 'allow',
        comment: 'Allow to service1_user user'
      }
    ]
  },
  get_user_acl () {
    return [
      {
        id: '5a2050e0377af6994a53b037',
        user: '5a204a89fb2ae988244c4a1b',
        endpoint: 'auth.server.com',
        resource: '/user/:id',
        methods: ['GET', 'PUT', 'PATCH'],
        action: 'allow',
        comment: 'Allow change own profile to user'
      }
    ]
  },
  get_user_restricted_1_acl () {
    return [
      {
        id: '5a2050e0377af6994a53b038',
        user: '1111111111',
        endpoint: 'auth.server.com',
        resource: '*',
        methods: ['GET', 'PUT', 'PATCH'],
        action: 'allow',
        comment: ''
      },
      {
        id: '5a2050e0377af6994a53b039',
        user: '1111111111',
        endpoint: 'auth.server.com',
        resource: '*',
        methods: ['DELETE'],
        action: 'deny',
        comment: 'Deny deletes'
      },
      {
        id: '5a2050e0377af6994a53b040',
        user: '1111111111',
        endpoint: 'auth.server.com',
        resource: '/:foo/:bar',
        methods: ['POST', 'PUT'],
        action: 'deny',
        comment: ''
      },
      {
        id: '5a2050e0377af6994a53b041',
        user: '1111111111',
        endpoint: 'auth.server.com',
        resource: '/:foo/:bar',
        methods: ['GET'],
        action: 'allow',
        comment: ''
      }
    ]
  }
}
