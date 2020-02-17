import * as React from 'react';
import Button from '../components/Button';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'components|basic/Button', // 스토리북에서 보여질 그룹과 경로를 명시
    component: Button, // 어떤 컴포넌트를 문서화 할지 명시
    decorators: [withKnobs] // 애드온 적용
};

export const button = () => {
    const buttonText = text('buttonText', 'Click Me');
    return <Button text={buttonText} />;
};

button.story = {
    name: 'Default'
};

export const standard = () => <Button text="clicks" />;