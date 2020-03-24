import Parent from './Parent.js';
import AddChild from './AddChild.js';
import RemoveChild from './RemoveChild.js';
import ChildState from './ChildState.js';
import Transform from './Transform.js';
import Position from './Position.js';
import Visible from './Visible.js';
import Alpha from './Alpha.js';
import Active from './Active.js';
import ScrollFactor from './ScrollFactor.js';
import Mask from './Mask.js';
import Depth from './Depth.js';
import Children from './Children.js';
import Tween from './Tween.js';

var methods = {};

Object.assign(
    methods,
    Parent,
    AddChild,
    RemoveChild,
    ChildState,
    Transform,
    Position,
    Visible,
    Alpha,
    Active,
    ScrollFactor,
    Mask,
    Depth,
    Children,
    Tween
);

export default methods;