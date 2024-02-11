import View from "./View"

type BoxProps = {
    View: typeof View
}

const Box: BoxProps = () => null

Box.View = View

export default Box