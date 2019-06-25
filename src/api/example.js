import { ajaxinstance } from './'
class Xhr {
  getChainDate = (postData = {}) => (
    ajaxinstance.get('/asset2/api/project/chainDateList', { params: postData })
  )
}

export default new Xhr()
