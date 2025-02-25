/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<4b7710e9093b09c2ba8f06a07d1a38a4>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RelayStoreUtilsTest4Fragment$fragmentType: FragmentType;
export type RelayStoreUtilsTest4Fragment$ref = RelayStoreUtilsTest4Fragment$fragmentType;
export type RelayStoreUtilsTest4Fragment$data = {|
  +profilePicture: ?{|
    +uri: ?string,
  |},
  +$refType: RelayStoreUtilsTest4Fragment$fragmentType,
  +$fragmentType: RelayStoreUtilsTest4Fragment$fragmentType,
|};
export type RelayStoreUtilsTest4Fragment = RelayStoreUtilsTest4Fragment$data;
export type RelayStoreUtilsTest4Fragment$key = {
  +$data?: RelayStoreUtilsTest4Fragment$data,
  +$fragmentRefs: RelayStoreUtilsTest4Fragment$fragmentType,
  +$fragmentSpreads: RelayStoreUtilsTest4Fragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "size"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelayStoreUtilsTest4Fragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "size",
          "variableName": "size"
        }
      ],
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "profilePicture",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "uri",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "bc6caf25f70ed42fd0b7cacafb1c64dd";
}

module.exports = ((node/*: any*/)/*: Fragment<
  RelayStoreUtilsTest4Fragment$fragmentType,
  RelayStoreUtilsTest4Fragment$data,
>*/);
