import { createElement as h } from 'preact/compat'
import BaseNode from './BaseNode'
import { Rect } from '../shape'
import { GraphModel, RectNodeModel } from '../../model'

export type IRectNodeProps = {
  model: RectNodeModel
  graphModel: GraphModel
}

export class RectNode extends BaseNode<IRectNodeProps> {
  getShape(): h.JSX.Element | null {
    const { model } = this.props
    const style = model.getNodeStyle()
    return (
      <Rect
        {...style}
        x={0}
        y={0}
        width={model.width}
        height={model.height}
        radius={model.radius}
      />
    )
  }
}

export default RectNode
