/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import EditorCommon = require('vs/editor/common/editorCommon');

export class DiffComputer {

	constructor(originalLines:string[], modifiedLines:string[], shouldPostProcessCharChanges:boolean, shouldIgnoreTrimWhitespace:boolean) {
	}

	public computeDiff(): EditorCommon.ILineChange[] {
		return [];
	}
}