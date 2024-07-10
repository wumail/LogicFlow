import BaseNodeModel from './BaseNodeModel'
import { Model } from '../BaseModel'
import { ModelType } from '../../constant'

import AnchorConfig = Model.AnchorConfig
import { observable } from 'mobx'
import LogicFlow from '../../LogicFlow'
import GraphModel from '../GraphModel'

export type IHtmlNodeModel = {
  width?: number
  height?: number
  style?: LogicFlow.CommonTheme
  textStyle?: LogicFlow.CommonTheme

  [key: string]: any
}

export class HtmlNodeModel extends BaseNodeModel {
  modelType = ModelType.HTML_NODE
  @observable properties: IHtmlNodeModel = {}

  constructor(data: LogicFlow.NodeConfig, graphModel: GraphModel) {
    super(data, graphModel)
    this.properties = data.properties || {}

    this.setAttributes()
  }

  setAttributes() {
    super.setAttributes()

    const { width, height } = this.properties
    if (width) this.width = width
    if (height) this.height = height
  }

  getDefaultAnchor(): AnchorConfig[] {
    const { width, height } = this
    return [
      { x: 0, y: -height / 2, id: `${this.id}_0` },
      { x: width / 2, y: 0, id: `${this.id}_1` },
      { x: 0, y: height / 2, id: `${this.id}_2` },
      { x: -width / 2, y: 0, id: `${this.id}_3` },
    ]
  }
}

export default HtmlNodeModel
