import { configure, addDecorator} from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo} from "@storybook/addon-info";
import { setConfig } from 'next/config';

// Set the NextJS publicRuntimeConfig property
setConfig({
    publicRuntimeConfig: {
        IMAGE_URL: 'https://dev-static.yap.yanolja.com/yap-admin',
    },
});

addDecorator(withInfo);
addDecorator(withKnobs);

configure(require.context('../src/stories', true, /\.stories\.tsx?$/), module);