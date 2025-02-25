/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<867f1f23e61558f4c807339d43fa6999>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RelayStoreUtilsTest3Fragment$fragmentType: FragmentType;
export type RelayStoreUtilsTest3Fragment$ref = RelayStoreUtilsTest3Fragment$fragmentType;
export type RelayStoreUtilsTest3Fragment$data = {|
  +profilePicture: ?{|
    +uri: ?string,
  |},
  +$refType: RelayStoreUtilsTest3Fragment$fragmentType,
  +$fragmentType: RelayStoreUtilsTest3Fragment$fragmentType,
|};
export type RelayStoreUtilsTest3Fragment = RelayStoreUtilsTest3Fragment$data;
export type RelayStoreUtilsTest3Fragment$key = {
  +$data?: RelayStoreUtilsTest3Fragment$data,
  +$fragmentRefs: RelayStoreUtilsTest3Fragment$fragmentType,
  +$fragmentSpreads: RelayStoreUtilsTest3Fragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelayStoreUtilsTest3Fragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "size",
          "value": 128
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
      "storageKey": "profilePicture(size:128)"
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "8dd490718abe2cffa2fdee2aa6bc1104";
}

module.exports = ((node/*: any*/)/*: Fragment<
  RelayStoreUtilsTest3Fragment$fragmentType,
  RelayStoreUtilsTest3Fragment$data,
>*/);
