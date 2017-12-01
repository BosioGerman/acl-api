module.exports = {
  get_guest_acl () {
    return [
      {
        id: '5a204f4b377af6994a53b030',
        userid: '5a204a2efb2ae988244c4a17',
        service: '*',
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
        userid: '5a1da2a5c7a175901988b5b9',
        service: '*',
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
        userid: '5a204a3ffb2ae988244c4a18',
        service: 'efactura.tera.com.ar',
        resource: '/spooler/:id/afip/wsfe/:apikey/wsaa',
        methods: ['GET'],
        action: 'allow',
        comment: 'Allow get afip tiket to spooler'
      },
      {
        id: '5a20502f377af6994a53b034',
        userid: '5a204a3ffb2ae988244c4a18',
        service: 'efactura.tera.com.ar',
        resource: '/spooler/:id',
        methods: ['GET', 'POST', 'PUT', 'PATCH'],
        action: 'allow',
        comment: 'Allow to spooler read and write spooler data'
      }
    ]
  },
  get_efactura_admin_acl () {
    return [
      {
        id: '5a20507a377af6994a53b035',
        userid: '5a204a4dfb2ae988244c4a19',
        service: 'efactura.tera.com.ar',
        resource: '*',
        methods: '*',
        action: 'allow',
        comment: 'Allow all on efactura.tera.com.ar to efactura_admin user'
      }
    ]
  },
  get_efactura_user_acl () {
    return [
      {
        id: '5a2050af377af6994a53b036',
        userid: '5a204a57fb2ae988244c4a1a',
        service: 'efactura.tera.com.ar',
        resource: '/spooler/:id',
        methods: ['GET'],
        action: 'allow',
        comment: 'Allow to efactura_user user'
      }
    ]
  },
  get_user_acl () {
    return [
      {
        id: '5a2050e0377af6994a53b037',
        userid: '5a204a89fb2ae988244c4a1b',
        service: 'auth.tera.com.ar',
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
        userid: '1111111111',
        service: 'auth.tera.com.ar',
        resource: '*',
        methods: ['GET', 'PUT', 'PATCH'],
        action: 'allow',
        comment: ''
      },
      {
        id: '5a2050e0377af6994a53b039',
        userid: '1111111111',
        service: 'auth.tera.com.ar',
        resource: '*',
        methods: ['DELETE'],
        action: 'deny',
        comment: 'Deny deletes'
      },
      {
        id: '5a2050e0377af6994a53b040',
        userid: '1111111111',
        service: 'auth.tera.com.ar',
        resource: '/:foo/:bar',
        methods: ['POST', 'PUT'],
        action: 'deny',
        comment: ''
      },
      {
        id: '5a2050e0377af6994a53b041',
        userid: '1111111111',
        service: 'auth.tera.com.ar',
        resource: '/:foo/:bar',
        methods: ['GET'],
        action: 'allow',
        comment: ''
      }
    ]
  }
}
