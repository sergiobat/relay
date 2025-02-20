/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<92671c6d4ed5e864abe9ef74e9f00ea4>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type usePaginationFragmentTest1Fragment$fragmentType: FragmentType;
export type usePaginationFragmentTest1Fragment$ref = usePaginationFragmentTest1Fragment$fragmentType;
export type usePaginationFragmentTest1Fragment$data = $ReadOnlyArray<{|
  +id: string,
  +$refType: usePaginationFragmentTest1Fragment$fragmentType,
  +$fragmentType: usePaginationFragmentTest1Fragment$fragmentType,
|}>;
export type usePaginationFragmentTest1Fragment = usePaginationFragmentTest1Fragment$data;
export type usePaginationFragmentTest1Fragment$key = $ReadOnlyArray<{
  +$data?: usePaginationFragmentTest1Fragment$data,
  +$fragmentRefs: usePaginationFragmentTest1Fragment$fragmentType,
  +$fragmentSpreads: usePaginationFragmentTest1Fragment$fragmentType,
  ...
}>;
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "usePaginationFragmentTest1Fragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "336d8ae6ada85aef562c734581f8e84c";
}

module.exports = ((node/*: any*/)/*: Fragment<
  usePaginationFragmentTest1Fragment$fragmentType,
  usePaginationFragmentTest1Fragment$data,
>*/);
