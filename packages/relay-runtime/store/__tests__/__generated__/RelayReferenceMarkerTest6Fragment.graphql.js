/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<7e8534fc4c7a4dd04225b0a69c0cc238>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RelayReferenceMarkerTest6Fragment$fragmentType: FragmentType;
export type RelayReferenceMarkerTest6Fragment$ref = RelayReferenceMarkerTest6Fragment$fragmentType;
export type RelayReferenceMarkerTest6Fragment$data = {|
  +id: string,
  +actors: ?$ReadOnlyArray<?{|
    +name: ?string,
  |}>,
  +$refType: RelayReferenceMarkerTest6Fragment$fragmentType,
  +$fragmentType: RelayReferenceMarkerTest6Fragment$fragmentType,
|};
export type RelayReferenceMarkerTest6Fragment = RelayReferenceMarkerTest6Fragment$data;
export type RelayReferenceMarkerTest6Fragment$key = {
  +$data?: RelayReferenceMarkerTest6Fragment$data,
  +$fragmentRefs: RelayReferenceMarkerTest6Fragment$fragmentType,
  +$fragmentSpreads: RelayReferenceMarkerTest6Fragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelayReferenceMarkerTest6Fragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "kind": "Stream",
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "actors",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ]
    }
  ],
  "type": "Feedback",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "42c1c3d08a6628aeb1e110098093ad2a";
}

module.exports = ((node/*: any*/)/*: Fragment<
  RelayReferenceMarkerTest6Fragment$fragmentType,
  RelayReferenceMarkerTest6Fragment$data,
>*/);
