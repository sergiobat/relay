/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<35d873b85b214d8362ec64df605508c3>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type useLazyLoadQueryNodeTestUserFragment$fragmentType: FragmentType;
export type useLazyLoadQueryNodeTestUserFragment$ref = useLazyLoadQueryNodeTestUserFragment$fragmentType;
export type useLazyLoadQueryNodeTestUserFragment$data = {|
  +name: ?string,
  +$refType: useLazyLoadQueryNodeTestUserFragment$fragmentType,
  +$fragmentType: useLazyLoadQueryNodeTestUserFragment$fragmentType,
|};
export type useLazyLoadQueryNodeTestUserFragment = useLazyLoadQueryNodeTestUserFragment$data;
export type useLazyLoadQueryNodeTestUserFragment$key = {
  +$data?: useLazyLoadQueryNodeTestUserFragment$data,
  +$fragmentRefs: useLazyLoadQueryNodeTestUserFragment$fragmentType,
  +$fragmentSpreads: useLazyLoadQueryNodeTestUserFragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useLazyLoadQueryNodeTestUserFragment",
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
  (node/*: any*/).hash = "90860ff39f89e2594e3eefcb64f7c8fb";
}

module.exports = ((node/*: any*/)/*: Fragment<
  useLazyLoadQueryNodeTestUserFragment$fragmentType,
  useLazyLoadQueryNodeTestUserFragment$data,
>*/);
