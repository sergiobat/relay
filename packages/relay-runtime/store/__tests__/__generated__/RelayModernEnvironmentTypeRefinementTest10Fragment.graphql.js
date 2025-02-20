/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<d8ae5c8495378d43af291c0de7f986ae>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RelayModernEnvironmentTypeRefinementTest10Fragment$fragmentType: FragmentType;
export type RelayModernEnvironmentTypeRefinementTest10Fragment$ref = RelayModernEnvironmentTypeRefinementTest10Fragment$fragmentType;
export type RelayModernEnvironmentTypeRefinementTest10Fragment$data = {|
  +name: ?string,
  +$refType: RelayModernEnvironmentTypeRefinementTest10Fragment$fragmentType,
  +$fragmentType: RelayModernEnvironmentTypeRefinementTest10Fragment$fragmentType,
|};
export type RelayModernEnvironmentTypeRefinementTest10Fragment = RelayModernEnvironmentTypeRefinementTest10Fragment$data;
export type RelayModernEnvironmentTypeRefinementTest10Fragment$key = {
  +$data?: RelayModernEnvironmentTypeRefinementTest10Fragment$data,
  +$fragmentRefs: RelayModernEnvironmentTypeRefinementTest10Fragment$fragmentType,
  +$fragmentSpreads: RelayModernEnvironmentTypeRefinementTest10Fragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelayModernEnvironmentTypeRefinementTest10Fragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "483daf1b6255511ef46294a24d84d5d0";
}

module.exports = ((node/*: any*/)/*: Fragment<
  RelayModernEnvironmentTypeRefinementTest10Fragment$fragmentType,
  RelayModernEnvironmentTypeRefinementTest10Fragment$data,
>*/);
