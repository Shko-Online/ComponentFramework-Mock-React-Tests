/*
	Unless explicitly acquired and licensed from Licensor under another
	license, the contents of this file are subject to the Reciprocal Public
	License ("RPL") Version 1.5, or subsequent versions as allowed by the RPL,
	and You may not copy or use this file in either source code or executable
	form, except in compliance with the terms and conditions of the RPL.

	All software distributed under the RPL is provided strictly on an "AS
	IS" basis, WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, AND
	LICENSOR HEREBY DISCLAIMS ALL SUCH WARRANTIES, INCLUDING WITHOUT
	LIMITATION, ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
	PURPOSE, QUIET ENJOYMENT, OR NON-INFRINGEMENT. See the RPL for specific
	language governing rights and limitations under the RPL. 
*/

/**  @type {import('ts-jest').JestConfigWithTsJest}  */
module.export ={
	moduleNameMapper:{
		'@shko-online/componentframework-mock/(.*)': '<rootDir>/ComponentFramework-Mock/src/$1',
		'@powercat/breadcrumb/(.*)': '<rootDir>/powercat-code-components/Breadcrumb/$1',
		'@powercat/auto-width-label/(.*)': '<rootDir>/powercat-code-components/AutoWidthLabel/$1',
		'@powercat/calendar/(.*)': '<rootDir>/powercat-code-components/Calendar/$1',
		'@powercat/commandbar/(.*)': '<rootDir>/powercat-code-components/CommandBar/$1',
		'@powercat/context-menu/(.*)': '<rootDir>/powercat-code-components/ContextMenu/$1',
		'@powercat/details-list/(.*)': '<rootDir>/powercat-code-components/DetailsList/$1',
	},
	preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      // transform files with ts-jest
      "^.+\\.(jsx?|tsx?)$": ["ts-jest"/*,
      {
        babelConfig: true,
      }*/],	
      "\\.resx" : "<rootDir>/raw-Loader.js"
    },
    testMatch:[ "<rootDir>/__tests__/**/*.[jt]s?(x)" ],
    coveragePathIgnorePatterns : [
      "/node_modules/",
      "/ComponentFramework-Mock/"
    ],
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