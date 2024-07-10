import BaseNode from './BaseNode'
import Polygon from '../shape/Polygon'
import { GraphModel, DiamondNodeModel } from '../../model'

export type IDiamondNodeProps = {
  model: DiamondNodeModel
  graphModel: GraphModel
}

export class DiamondNode extends BaseNode<IDiamondNodeProps> {
  getShape() {
    const { model } = this.props
    const style = model.getNodeStyle()
    return (
      <g>
        <Polygon {...style} points={model.points} />
      </g>
    )
  }
}

export default DiamondNode
