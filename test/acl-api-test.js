const test = require('ava').test
const fixtures = require('./fixtures/acl')
const acl = require('./../lib/acl')
test.beforeEach(async t => {

})
test('Guest Acl - Cant access ', async t => {
  let acls = fixtures.get_guest_acl()
  let result = await acl.checkAclList(acls, 'api.server.com', '/', 'GET')
  t.false(result)
})

test('Guest Acl - Cant access ', async t => {
  let acls = fixtures.get_guest_acl()
  let result = await acl.checkAclList(acls, 'auth.server.com', '/', 'GET')
  t.false(result)
})

test('Root Acl - All access ', async t => {
  let acls = fixtures.get_root_acl()
  let result = await acl.checkAclList(acls, 'api.server.com', '/', 'GET')
  t.true(result)
})

test('Root Acl - Allow Delete efactura.server.com/spooler/:id', async t => {
  let acls = fixtures.get_root_acl()
  let result = await acl.checkAclList(acls, 'efactura.server.com', '/spooler/:id', 'DELETE')
  t.true(result)
})

test('spooler Acl - Allow GET afip tiket', async t => {
  let acls = fixtures.get_spooler_acl()
  let result = await acl.checkAclList(acls, 'efactura.server.com', '/spooler/111111/afip/wsfe/abcde1234/wsaa', 'GET')
  t.true(result)
})

test('spooler Acl - Deny POST afip tiket', async t => {
  let acls = fixtures.get_spooler_acl()
  let result = await acl.checkAclList(acls, 'efactura.server.com', '/spooler/111111/afip/wsfe/abcde1234/wsaa', 'POST')
  t.false(result)
})

test('spooler Acl - Deny PUT afip tiket', async t => {
  let acls = fixtures.get_spooler_acl()
  let result = await acl.checkAclList(acls, 'efactura.server.com', '/spooler/111111/afip/wsfe/abcde1234/wsaa', 'PUT')
  t.false(result)
})

test('spooler Acl - Deny GET auth server', async t => {
  let acls = fixtures.get_spooler_acl()
  let result = await acl.checkAclList(acls, 'auth.server.com', '/auth', 'GET')
  t.false(result)
})

test('spooler Acl - Allow GET efactura.server.com/spooler/:id', async t => {
  let acls = fixtures.get_spooler_acl()
  let result = await acl.checkAclList(acls, 'efactura.server.com', '/spooler/:id', 'GET')
  t.true(result)
})

test('spooler Acl - Allow POST efactura.server.com/spooler/:id', async t => {
  let acls = fixtures.get_spooler_acl()
  let result = await acl.checkAclList(acls, 'efactura.server.com', '/spooler/:id', 'POST')
  t.true(result)
})

test('spooler Acl - Allow PUT efactura.server.com/spooler/:id', async t => {
  let acls = fixtures.get_spooler_acl()
  let result = await acl.checkAclList(acls, 'efactura.server.com', '/spooler/:id', 'PUT')
  t.true(result)
})

test('spooler Acl - Allow PATCH efactura.server.com/spooler/:id', async t => {
  let acls = fixtures.get_spooler_acl()
  let result = await acl.checkAclList(acls, 'efactura.server.com', '/spooler/:id', 'PATCH')
  t.true(result)
})

test('spooler Acl - Deny Delete efactura.server.com/spooler/:id', async t => {
  let acls = fixtures.get_spooler_acl()
  let result = await acl.checkAclList(acls, 'efactura.server.com', '/spooler/:id', 'DELETE')
  t.false(result)
})

test('spooler Acl - Deny GET efactura.server.com/spooler', async t => {
  let acls = fixtures.get_spooler_acl()
  let result = await acl.checkAclList(acls, 'efactura.server.com', '/spooler', 'GET')
  t.false(result)
})

test('efactura_admin Acl - Allow GET efactura.server.com/spooler', async t => {
  let acls = fixtures.get_efactura_admin_acl()
  let result = await acl.checkAclList(acls, 'efactura.server.com', '/spooler', 'GET')
  t.true(result)
})

test('efactura_admin Acl - Allow Delete efactura.server.com/spooler/:id', async t => {
  let acls = fixtures.get_efactura_admin_acl()
  let result = await acl.checkAclList(acls, 'efactura.server.com', '/spooler/:id', 'DELETE')
  t.true(result)
})

test('efactura_admin Acl - Allow GET efactura.server.com/spooler', async t => {
  let acls = fixtures.get_efactura_admin_acl()
  let result = await acl.checkAclList(acls, 'efactura.server.com', '/spooler', 'GET')
  t.true(result)
})

test('efactura_user Acl - Allow GET efactura.server.com/spooler/:id', async t => {
  let acls = fixtures.get_efactura_user_acl()
  let result = await acl.checkAclList(acls, 'efactura.server.com', '/spooler/123412123', 'GET')
  t.true(result)
})

test('efactura_user Acl - Deny POST efactura.server.com/spooler/:id', async t => {
  let acls = fixtures.get_efactura_user_acl()
  let result = await acl.checkAclList(acls, 'efactura.server.com', '/spooler/123412123', 'POST')
  t.false(result)
})

test('efactura_user Acl - Deny PUT efactura.server.com/spooler/:id', async t => {
  let acls = fixtures.get_efactura_user_acl()
  let result = await acl.checkAclList(acls, 'efactura.server.com', '/spooler/123412123', 'PUT')
  t.false(result)
})

test('efactura_user Acl - Deny PATCH efactura.server.com/spooler/:id', async t => {
  let acls = fixtures.get_efactura_user_acl()
  let result = await acl.checkAclList(acls, 'efactura.server.com', '/spooler/123412123', 'PATCH')
  t.false(result)
})

test('efactura_user Acl - Deny DELETE efactura.server.com/spooler/:id', async t => {
  let acls = fixtures.get_efactura_user_acl()
  let result = await acl.checkAclList(acls, 'efactura.server.com', '/spooler/123412123', 'DELETE')
  t.false(result)
})

test('efactura_user Acl - Deny GET auth.server.com/spooler/:id', async t => {
  let acls = fixtures.get_efactura_user_acl()
  let result = await acl.checkAclList(acls, 'auth.server.com', '/spooler/123412123', 'GET')
  t.false(result)
})
