/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<8aa39c5634e74843adf3149a9f5678ac>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
type RelayModernEnvironmentTypeRefinementTest8Fragment$fragmentType = any;
import type { FragmentType } from "relay-runtime";
declare export opaque type RelayModernEnvironmentTypeRefinementTest7Fragment$fragmentType: FragmentType;
export type RelayModernEnvironmentTypeRefinementTest7Fragment$ref = RelayModernEnvironmentTypeRefinementTest7Fragment$fragmentType;
export type RelayModernEnvironmentTypeRefinementTest7Fragment$data = {|
  +id?: string,
  +lastName?: ?string,
  +$fragmentRefs: RelayModernEnvironmentTypeRefinementTest8Fragment$fragmentType,
  +$fragmentSpreads: RelayModernEnvironmentTypeRefinementTest8Fragment$fragmentType,
  +$refType: RelayModernEnvironmentTypeRefinementTest7Fragment$fragmentType,
  +$fragmentType: RelayModernEnvironmentTypeRefinementTest7Fragment$fragmentType,
|};
export type RelayModernEnvironmentTypeRefinementTest7Fragment = RelayModernEnvironmentTypeRefinementTest7Fragment$data;
export type RelayModernEnvironmentTypeRefinementTest7Fragment$key = {
  +$data?: RelayModernEnvironmentTypeRefinementTest7Fragment$data,
  +$fragmentRefs: RelayModernEnvironmentTypeRefinementTest7Fragment$fragmentType,
  +$fragmentSpreads: RelayModernEnvironmentTypeRefinementTest7Fragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelayModernEnvironmentTypeRefinementTest7Fragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "lastName",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "RelayModernEnvironmentTypeRefinementTest8Fragment"
        }
      ],
      "type": "Actor",
      "abstractKey": "__isActor"
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "03c0b49779e3e92b0186c5aea133afa8";
}

module.exports = ((node/*: any*/)/*: Fragment<
  RelayModernEnvironmentTypeRefinementTest7Fragment$fragmentType,
  RelayModernEnvironmentTypeRefinementTest7Fragment$data,
>*/);
