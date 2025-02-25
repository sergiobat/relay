/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<e4f355512d7c8c6a6c154b8e8b7a3a13>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RelayModernEnvironmentExecuteWithOverlappingModuleTestPlainUserNameRenderer_name$fragmentType: FragmentType;
export type RelayModernEnvironmentExecuteWithOverlappingModuleTestPlainUserNameRenderer_name$ref = RelayModernEnvironmentExecuteWithOverlappingModuleTestPlainUserNameRenderer_name$fragmentType;
export type RelayModernEnvironmentExecuteWithOverlappingModuleTestPlainUserNameRenderer_name$data = {|
  +plaintext: ?string,
  +data: ?{|
    +text: ?string,
  |},
  +$refType: RelayModernEnvironmentExecuteWithOverlappingModuleTestPlainUserNameRenderer_name$fragmentType,
  +$fragmentType: RelayModernEnvironmentExecuteWithOverlappingModuleTestPlainUserNameRenderer_name$fragmentType,
|};
export type RelayModernEnvironmentExecuteWithOverlappingModuleTestPlainUserNameRenderer_name = RelayModernEnvironmentExecuteWithOverlappingModuleTestPlainUserNameRenderer_name$data;
export type RelayModernEnvironmentExecuteWithOverlappingModuleTestPlainUserNameRenderer_name$key = {
  +$data?: RelayModernEnvironmentExecuteWithOverlappingModuleTestPlainUserNameRenderer_name$data,
  +$fragmentRefs: RelayModernEnvironmentExecuteWithOverlappingModuleTestPlainUserNameRenderer_name$fragmentType,
  +$fragmentSpreads: RelayModernEnvironmentExecuteWithOverlappingModuleTestPlainUserNameRenderer_name$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelayModernEnvironmentExecuteWithOverlappingModuleTestPlainUserNameRenderer_name",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "plaintext",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "PlainUserNameData",
      "kind": "LinkedField",
      "name": "data",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "text",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "PlainUserNameRenderer",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "771a707877f5334e80dff3cf8d305a68";
}

module.exports = ((node/*: any*/)/*: Fragment<
  RelayModernEnvironmentExecuteWithOverlappingModuleTestPlainUserNameRenderer_name$fragmentType,
  RelayModernEnvironmentExecuteWithOverlappingModuleTestPlainUserNameRenderer_name$data,
>*/);
