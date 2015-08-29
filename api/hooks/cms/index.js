import Marlinspike from 'marlinspike'

class CMS extends Marlinspike {
  constructor (sails) {
    super(sails, module)
  }
}

export default Marlinspike.createSailsHook(CMS)

