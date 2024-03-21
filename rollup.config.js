'use strict';

const replace = require('@rollup/plugin-replace');
const terser = require('@rollup/plugin-terser');
const pkg = require("./package.json");

const libName = 'SimplyBuilderAttachShadow';
const {version} = pkg;

const outputDefault = {
    name: libName,
    format: 'iife',
    strict: true,
    generatedCode: {
        preset: 'es5',
        arrowFunctions: true,
        constBindings: true,
        objectShorthand: true,
        symbols: true,
    },
    extend: true,
    validate: true,
    compact: true,
    banner: '/*! ' + libName + ' version ' + version + ' */',
    footer: '/*! https://github.com/SimplyBuilder */'
};
module.exports = {
    input: 'src/main.js',
    output: [
        {
            file: 'lib/main.js',
            ...outputDefault
        },
        {
            file: 'lib/main.min.js',
            plugins: [
                terser({
                    module: true,
                    ecma: 5,
                    keep_classnames: true,
                    keep_fnames: true,
                })
            ],
            ...outputDefault
        }
    ],
    plugins: [
        replace({
            preventAssignment:true,
            'SimplyBuilderModuleLibName': libName,
            'SimplyBuilderModuleLibVersion': version
        })
    ]
};