/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<28959c0010116d801a5185dbc213a2cb>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type useBlockingPaginationFragmentTest1Fragment$fragmentType: FragmentType;
export type useBlockingPaginationFragmentTest1Fragment$ref = useBlockingPaginationFragmentTest1Fragment$fragmentType;
export type useBlockingPaginationFragmentTest1Fragment$data = $ReadOnlyArray<{|
  +id: string,
  +$refType: useBlockingPaginationFragmentTest1Fragment$fragmentType,
  +$fragmentType: useBlockingPaginationFragmentTest1Fragment$fragmentType,
|}>;
export type useBlockingPaginationFragmentTest1Fragment = useBlockingPaginationFragmentTest1Fragment$data;
export type useBlockingPaginationFragmentTest1Fragment$key = $ReadOnlyArray<{
  +$data?: useBlockingPaginationFragmentTest1Fragment$data,
  +$fragmentRefs: useBlockingPaginationFragmentTest1Fragment$fragmentType,
  +$fragmentSpreads: useBlockingPaginationFragmentTest1Fragment$fragmentType,
  ...
}>;
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "useBlockingPaginationFragmentTest1Fragment",
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
  (node/*: any*/).hash = "ff8a7af82662cd77253e7908d8c64d41";
}

module.exports = ((node/*: any*/)/*: Fragment<
  useBlockingPaginationFragmentTest1Fragment$fragmentType,
  useBlockingPaginationFragmentTest1Fragment$data,
>*/);
