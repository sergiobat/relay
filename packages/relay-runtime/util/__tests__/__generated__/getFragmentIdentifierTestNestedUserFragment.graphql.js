/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<79312f86088f9d0d32610893770b2f02>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type getFragmentIdentifierTestNestedUserFragment$fragmentType: FragmentType;
export type getFragmentIdentifierTestNestedUserFragment$ref = getFragmentIdentifierTestNestedUserFragment$fragmentType;
export type getFragmentIdentifierTestNestedUserFragment$data = {|
  +username: ?string,
  +$refType: getFragmentIdentifierTestNestedUserFragment$fragmentType,
  +$fragmentType: getFragmentIdentifierTestNestedUserFragment$fragmentType,
|};
export type getFragmentIdentifierTestNestedUserFragment = getFragmentIdentifierTestNestedUserFragment$data;
export type getFragmentIdentifierTestNestedUserFragment$key = {
  +$data?: getFragmentIdentifierTestNestedUserFragment$data,
  +$fragmentRefs: getFragmentIdentifierTestNestedUserFragment$fragmentType,
  +$fragmentSpreads: getFragmentIdentifierTestNestedUserFragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "getFragmentIdentifierTestNestedUserFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "username",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "75c693cc47597efb281a82456e21fd4d";
}

module.exports = ((node/*: any*/)/*: Fragment<
  getFragmentIdentifierTestNestedUserFragment$fragmentType,
  getFragmentIdentifierTestNestedUserFragment$data,
>*/);
