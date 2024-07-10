import Circle from '../shape/Circle'
import BaseNode from './BaseNode'
import { GraphModel, CircleNodeModel } from '../../model'

export type ICircleNodeProps = {
  model: CircleNodeModel
  graphModel: GraphModel
}

export class CircleNode extends BaseNode<ICircleNodeProps> {
  getShape() {
    const { model } = this.props
    const { r } = model
    const style = model.getNodeStyle()
    return <Circle {...style} r={r} />
  }
}

export default CircleNode
