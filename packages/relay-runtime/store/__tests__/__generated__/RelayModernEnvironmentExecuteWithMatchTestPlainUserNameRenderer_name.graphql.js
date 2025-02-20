/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<27b351f7d7d3092b9b4f32db52d9fda1>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RelayModernEnvironmentExecuteWithMatchTestPlainUserNameRenderer_name$fragmentType: FragmentType;
export type RelayModernEnvironmentExecuteWithMatchTestPlainUserNameRenderer_name$ref = RelayModernEnvironmentExecuteWithMatchTestPlainUserNameRenderer_name$fragmentType;
export type RelayModernEnvironmentExecuteWithMatchTestPlainUserNameRenderer_name$data = {|
  +plaintext: ?string,
  +data: ?{|
    +text: ?string,
  |},
  +$refType: RelayModernEnvironmentExecuteWithMatchTestPlainUserNameRenderer_name$fragmentType,
  +$fragmentType: RelayModernEnvironmentExecuteWithMatchTestPlainUserNameRenderer_name$fragmentType,
|};
export type RelayModernEnvironmentExecuteWithMatchTestPlainUserNameRenderer_name = RelayModernEnvironmentExecuteWithMatchTestPlainUserNameRenderer_name$data;
export type RelayModernEnvironmentExecuteWithMatchTestPlainUserNameRenderer_name$key = {
  +$data?: RelayModernEnvironmentExecuteWithMatchTestPlainUserNameRenderer_name$data,
  +$fragmentRefs: RelayModernEnvironmentExecuteWithMatchTestPlainUserNameRenderer_name$fragmentType,
  +$fragmentSpreads: RelayModernEnvironmentExecuteWithMatchTestPlainUserNameRenderer_name$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelayModernEnvironmentExecuteWithMatchTestPlainUserNameRenderer_name",
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
  (node/*: any*/).hash = "1160d797e3f175a7d33877254f0f678a";
}

module.exports = ((node/*: any*/)/*: Fragment<
  RelayModernEnvironmentExecuteWithMatchTestPlainUserNameRenderer_name$fragmentType,
  RelayModernEnvironmentExecuteWithMatchTestPlainUserNameRenderer_name$data,
>*/);
