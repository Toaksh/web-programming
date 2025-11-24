import {fn} from 'storybook/test';

import Avatars from './Avatars.jsx';

export default {
    title: 'Entity/Avatars',
    component: Avatars,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {onClick: fn()},
};

export const Primary = {
    args: {
        style: {display: "flex", gap: "4px"}
    },
};
