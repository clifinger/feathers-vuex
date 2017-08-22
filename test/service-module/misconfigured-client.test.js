import assert from 'chai/chai'
import feathersVuex from '~/src/service-module/service-module'
import feathers from 'feathers/client'
import hooks from 'feathers-hooks'
import auth from 'feathers-authentication-client'

const feathersClient = feathers()
  .configure(hooks())
  .configure(auth())

describe('Service Module - Bad Client Setup', () => {
  it('throws an error when no client transport plugin is registered', () => {
    const service = feathersVuex(feathersClient)

    try {
      service('todos')
    } catch (error) {
      assert(error.message === 'No service was found. Please configure a transport plugin on the Feathers Client', 'got an error with a misconfigured client')
    }
  })
})
