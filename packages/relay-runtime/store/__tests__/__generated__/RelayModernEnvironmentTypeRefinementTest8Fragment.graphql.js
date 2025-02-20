/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<c08d50d0956ac61c47e5bf28ae82eaa9>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RelayModernEnvironmentTypeRefinementTest8Fragment$fragmentType: FragmentType;
export type RelayModernEnvironmentTypeRefinementTest8Fragment$ref = RelayModernEnvironmentTypeRefinementTest8Fragment$fragmentType;
export type RelayModernEnvironmentTypeRefinementTest8Fragment$data = {|
  +name: ?string,
  +$refType: RelayModernEnvironmentTypeRefinementTest8Fragment$fragmentType,
  +$fragmentType: RelayModernEnvironmentTypeRefinementTest8Fragment$fragmentType,
|};
export type RelayModernEnvironmentTypeRefinementTest8Fragment = RelayModernEnvironmentTypeRefinementTest8Fragment$data;
export type RelayModernEnvironmentTypeRefinementTest8Fragment$key = {
  +$data?: RelayModernEnvironmentTypeRefinementTest8Fragment$data,
  +$fragmentRefs: RelayModernEnvironmentTypeRefinementTest8Fragment$fragmentType,
  +$fragmentSpreads: RelayModernEnvironmentTypeRefinementTest8Fragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelayModernEnvironmentTypeRefinementTest8Fragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Named",
  "abstractKey": "__isNamed"
};

if (__DEV__) {
  (node/*: any*/).hash = "ec9c5fd99f2d4024b977fb2f73e2e60a";
}

module.exports = ((node/*: any*/)/*: Fragment<
  RelayModernEnvironmentTypeRefinementTest8Fragment$fragmentType,
  RelayModernEnvironmentTypeRefinementTest8Fragment$data,
>*/);
