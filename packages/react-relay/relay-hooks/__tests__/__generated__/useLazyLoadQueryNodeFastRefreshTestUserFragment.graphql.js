/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<bc3b33e98081335b544f77e4c645c8a0>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type useLazyLoadQueryNodeFastRefreshTestUserFragment$fragmentType: FragmentType;
export type useLazyLoadQueryNodeFastRefreshTestUserFragment$ref = useLazyLoadQueryNodeFastRefreshTestUserFragment$fragmentType;
export type useLazyLoadQueryNodeFastRefreshTestUserFragment$data = {|
  +name: ?string,
  +$refType: useLazyLoadQueryNodeFastRefreshTestUserFragment$fragmentType,
  +$fragmentType: useLazyLoadQueryNodeFastRefreshTestUserFragment$fragmentType,
|};
export type useLazyLoadQueryNodeFastRefreshTestUserFragment = useLazyLoadQueryNodeFastRefreshTestUserFragment$data;
export type useLazyLoadQueryNodeFastRefreshTestUserFragment$key = {
  +$data?: useLazyLoadQueryNodeFastRefreshTestUserFragment$data,
  +$fragmentRefs: useLazyLoadQueryNodeFastRefreshTestUserFragment$fragmentType,
  +$fragmentSpreads: useLazyLoadQueryNodeFastRefreshTestUserFragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useLazyLoadQueryNodeFastRefreshTestUserFragment",
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
  (node/*: any*/).hash = "8e11c134c00f9c403402ed2888eaa8d8";
}

module.exports = ((node/*: any*/)/*: Fragment<
  useLazyLoadQueryNodeFastRefreshTestUserFragment$fragmentType,
  useLazyLoadQueryNodeFastRefreshTestUserFragment$data,
>*/);
