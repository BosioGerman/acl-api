const test = require('ava').test
const fixtures = require('./fixtures')
const acl = require('./../')

test('Guest Acl - Cant access ', async t => {
  let acls = fixtures.get_guest_acl()
  let result = await acl.CheckAcl(acls, 'api.server.com', '/', 'GET')
  t.false(result)
})

test('Guest Acl - Cant access ', async t => {
  let acls = fixtures.get_guest_acl()
  let result = await acl.CheckAcl(acls, 'auth.server.com', '/', 'GET')
  t.false(result)
})

test('Root Acl - All access ', async t => {
  let acls = fixtures.get_root_acl()
  let result = await acl.CheckAcl(acls, 'api.server.com', '/', 'GET')
  t.true(result)
})

test('Root Acl - Allow Delete service1.server.com/spooler/:id', async t => {
  let acls = fixtures.get_root_acl()
  let result = await acl.CheckAcl(acls, 'service1.server.com', '/spooler/:id', 'DELETE')
  t.true(result)
})

test('spooler Acl - Allow GET afip tiket', async t => {
  let acls = fixtures.get_spooler_acl()
  let result = acl.CheckAcl(acls, 'service1.server.com', '/spooler/111111/afip/wsfe/abcde1234/wsaa', 'GET')
  t.true(result)
})

test('spooler Acl - Deny POST afip tiket', async t => {
  let acls = fixtures.get_spooler_acl()
  let result = await acl.CheckAcl(acls, 'service1.server.com', '/spooler/111111/afip/wsfe/abcde1234/wsaa', 'POST')
  t.false(result)
})

test('spooler Acl - Deny PUT afip tiket', async t => {
  let acls = fixtures.get_spooler_acl()
  let result = await acl.CheckAcl(acls, 'service1.server.com', '/spooler/111111/afip/wsfe/abcde1234/wsaa', 'PUT')
  t.false(result)
})

test('spooler Acl - Deny GET auth server', async t => {
  let acls = fixtures.get_spooler_acl()
  let result = await acl.CheckAcl(acls, 'auth.server.com', '/auth', 'GET')
  t.false(result)
})

test('spooler Acl - Allow GET service1.server.com/spooler/:id', async t => {
  let acls = fixtures.get_spooler_acl()
  let result = await acl.CheckAcl(acls, 'service1.server.com', '/spooler/:id', 'GET')
  t.true(result)
})

test('spooler Acl - Allow POST service1.server.com/spooler/:id', async t => {
  let acls = fixtures.get_spooler_acl()
  let result = await acl.CheckAcl(acls, 'service1.server.com', '/spooler/:id', 'POST')
  t.true(result)
})

test('spooler Acl - Allow PUT service1.server.com/spooler/:id', async t => {
  let acls = fixtures.get_spooler_acl()
  let result = await acl.CheckAcl(acls, 'service1.server.com', '/spooler/:id', 'PUT')
  t.true(result)
})

test('spooler Acl - Allow PATCH service1.server.com/spooler/:id', async t => {
  let acls = fixtures.get_spooler_acl()
  let result = await acl.CheckAcl(acls, 'service1.server.com', '/spooler/:id', 'PATCH')
  t.true(result)
})

test('spooler Acl - Deny Delete service1.server.com/spooler/:id', async t => {
  let acls = fixtures.get_spooler_acl()
  let result = await acl.CheckAcl(acls, 'service1.server.com', '/spooler/:id', 'DELETE')
  t.false(result)
})

test('spooler Acl - Deny GET service1.server.com/spooler', async t => {
  let acls = fixtures.get_spooler_acl()
  let result = await acl.CheckAcl(acls, 'service1.server.com', '/spooler', 'GET')
  t.false(result)
})

test('service1_admin Acl - Allow GET service1.server.com/spooler', async t => {
  let acls = fixtures.get_service1_admin_acl()
  let result = await acl.CheckAcl(acls, 'service1.server.com', '/spooler', 'GET')
  t.true(result)
})

test('service1_admin Acl - Allow Delete service1.server.com/spooler/:id', async t => {
  let acls = fixtures.get_service1_admin_acl()
  let result = await acl.CheckAcl(acls, 'service1.server.com', '/spooler/:id', 'DELETE')
  t.true(result)
})

test('service1_admin Acl - Allow GET service1.server.com/spooler', async t => {
  let acls = fixtures.get_service1_admin_acl()
  let result = await acl.CheckAcl(acls, 'service1.server.com', '/spooler', 'GET')
  t.true(result)
})

test('service1_user Acl - Allow GET service1.server.com/spooler/:id', async t => {
  let acls = fixtures.get_service1_user_acl()
  let result = await acl.CheckAcl(acls, 'service1.server.com', '/spooler/123412123', 'GET')
  t.true(result)
})

test('service1_user Acl - Deny POST service1.server.com/spooler/:id', async t => {
  let acls = fixtures.get_service1_user_acl()
  let result = await acl.CheckAcl(acls, 'service1.server.com', '/spooler/123412123', 'POST')
  t.false(result)
})

test('service1_user Acl - Deny PUT service1.server.com/spooler/:id', async t => {
  let acls = fixtures.get_service1_user_acl()
  let result = await acl.CheckAcl(acls, 'service1.server.com', '/spooler/123412123', 'PUT')
  t.false(result)
})

test('service1_user Acl - Deny PATCH service1.server.com/spooler/:id', async t => {
  let acls = fixtures.get_service1_user_acl()
  let result = await acl.CheckAcl(acls, 'service1.server.com', '/spooler/123412123', 'PATCH')
  t.false(result)
})

test('service1_user Acl - Deny DELETE service1.server.com/spooler/:id', async t => {
  let acls = fixtures.get_service1_user_acl()
  let result = await acl.CheckAcl(acls, 'service1.server.com', '/spooler/123412123', 'DELETE')
  t.false(result)
})

test('service1_user Acl - Deny GET auth.server.com/spooler/:id', async t => {
  let acls = fixtures.get_service1_user_acl()
  let result = await acl.CheckAcl(acls, 'auth.server.com', '/spooler/123412123', 'GET')
  t.false(result)
})
