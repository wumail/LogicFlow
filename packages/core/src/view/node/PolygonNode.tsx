import BaseNode from './BaseNode'
import { Polygon } from '../shape'
import { GraphModel, PolygonNodeModel } from '../../model'

export type IPolygonNodeProps = {
  model: PolygonNodeModel
  graphModel: GraphModel
}

export class PolygonNode extends BaseNode<IPolygonNodeProps> {
  getShape() {
    const { model } = this.props
    const { points } = model as PolygonNodeModel
    const style = model.getNodeStyle()
    return (
      <g>
        <Polygon {...style} points={points} x={0} y={0} />
      </g>
    )
  }
}

export default PolygonNode
