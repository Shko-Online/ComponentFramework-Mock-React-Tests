/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

const path = require("path");

/**  @type {import('ts-jest').InitialOptionsTsJest}  */
module.exports = {
	moduleNameMapper:{
		'@powercat/breadcrumb/(.*)': '<rootDir>/powercat-code-components/Breadcrumb/$1',
		'@powercat/auto-width-label/(.*)': '<rootDir>/powercat-code-components/AutoWidthLabel/$1',
		'@powercat/calendar/(.*)': '<rootDir>/powercat-code-components/Calendar/$1',
		'@powercat/commandbar/(.*)': '<rootDir>/powercat-code-components/CommandBar/$1',
		'@powercat/context-menu/(.*)': '<rootDir>/powercat-code-components/ContextMenu/$1',
		'@powercat/details-list/(.*)': '<rootDir>/powercat-code-components/DetailsList/$1',
		'@powercat/pivot/(.*)': '<rootDir>/powercat-code-components/Pivot/$1',
		'@powercat/nav/(.*)': '<rootDir>/powercat-code-components/Nav/$1',
		'@powercat/shimmer/(.*)': '<rootDir>/powercat-code-components/Shimmer/$1',
		'@powercat/picker/(.*)': '<rootDir>/powercat-code-components/Picker/$1',
		'@powercat/tag-list/(.*)': '<rootDir>/powercat-code-components/TagList/$1',
		'@powercat/theme-generator/(.*)': '<rootDir>/powercat-code-components/ThemeGenerator/$1',
 		'@fluentui/react':'<rootDir>/node_modules/@fluentui/react',
		'@fluentui/date-time-utilities/(.*)': "<rootDir>/node_modules/@fluentui/date-time-utilities/$1"
	},
	preset: 'ts-jest',
    testEnvironment: 'jsdom',
	globals: {
        'ts-jest': {
            tsconfig: {
                // allow js in typescript
                allowJs: true,
            },
        },
    },
    transform: {
      // transform files with ts-jest
      "^.+\\.(jsx?|tsx?)$": ["ts-jest",
      {
        babelConfig: true,
      }],	
      "\\.resx" : "<rootDir>/raw-Loader.js"
    },	
    coveragePathIgnorePatterns : [
      "/node_modules/"
    ],
	testMatch: [ "<rootDir>/__tests__/**/*.[jt]s?(x)"/*, "<rootDir>/?(*.)+(spec|test).[jt]s?(x)"*/ ],
	setupFiles: [path.resolve(path.join(__dirname, 'config', 'tests.js'))],
	snapshotSerializers: ['@fluentui/jest-serializer-merge-styles'],
	transformIgnorePatterns: [
        // allow fluent ui transformation when running tests
        // this is because we are using path based imports
        'node_modules/(?!(@fluentui/react/lib|@fluentui/style-utilities/lib|@fluentui/react-hooks/lib))',
    ],
	// "moduleFileExtensions": [
	// 	"ts",
	// 	"tsx",
	// 	"js",
	// 	"jsx",
	// 	"json",
	// 	"node"
	//   ],
    coverageReporters: ['cobertura', "text","html"]
}