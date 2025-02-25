/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<5590beaa4f3a5928d325f9d586e187df>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RelayMockPayloadGeneratorTest21Fragment$fragmentType: FragmentType;
export type RelayMockPayloadGeneratorTest21Fragment$ref = RelayMockPayloadGeneratorTest21Fragment$fragmentType;
export type RelayMockPayloadGeneratorTest21Fragment$data = {|
  +birthdate: ?{|
    +month: ?number,
  |},
  +$refType: RelayMockPayloadGeneratorTest21Fragment$fragmentType,
  +$fragmentType: RelayMockPayloadGeneratorTest21Fragment$fragmentType,
|};
export type RelayMockPayloadGeneratorTest21Fragment = RelayMockPayloadGeneratorTest21Fragment$data;
export type RelayMockPayloadGeneratorTest21Fragment$key = {
  +$data?: RelayMockPayloadGeneratorTest21Fragment$data,
  +$fragmentRefs: RelayMockPayloadGeneratorTest21Fragment$fragmentType,
  +$fragmentSpreads: RelayMockPayloadGeneratorTest21Fragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelayMockPayloadGeneratorTest21Fragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Date",
      "kind": "LinkedField",
      "name": "birthdate",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "month",
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
  (node/*: any*/).hash = "093556c04c6e7321996c73f5781d15ce";
}

module.exports = ((node/*: any*/)/*: Fragment<
  RelayMockPayloadGeneratorTest21Fragment$fragmentType,
  RelayMockPayloadGeneratorTest21Fragment$data,
>*/);
