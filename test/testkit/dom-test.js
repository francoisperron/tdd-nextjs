import {render, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({adapter: new Adapter()})

export const mount = render
