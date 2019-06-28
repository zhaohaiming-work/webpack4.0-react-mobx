import { ajax } from './'
class Xhr {
  getChainDate = (postData = {}) => (
    ajax.get('/asset2/api/project/chainDateList', { params: postData })
  )
}

export default new Xhr()
