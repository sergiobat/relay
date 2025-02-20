/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<83050bac2e17e143bd5627baa2c16a9a>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type useRefetchableFragmentNodeWithSuspenseTransitionTestNestedUserFragment$fragmentType: FragmentType;
export type useRefetchableFragmentNodeWithSuspenseTransitionTestNestedUserFragment$ref = useRefetchableFragmentNodeWithSuspenseTransitionTestNestedUserFragment$fragmentType;
export type useRefetchableFragmentNodeWithSuspenseTransitionTestNestedUserFragment$data = {|
  +username: ?string,
  +$refType: useRefetchableFragmentNodeWithSuspenseTransitionTestNestedUserFragment$fragmentType,
  +$fragmentType: useRefetchableFragmentNodeWithSuspenseTransitionTestNestedUserFragment$fragmentType,
|};
export type useRefetchableFragmentNodeWithSuspenseTransitionTestNestedUserFragment = useRefetchableFragmentNodeWithSuspenseTransitionTestNestedUserFragment$data;
export type useRefetchableFragmentNodeWithSuspenseTransitionTestNestedUserFragment$key = {
  +$data?: useRefetchableFragmentNodeWithSuspenseTransitionTestNestedUserFragment$data,
  +$fragmentRefs: useRefetchableFragmentNodeWithSuspenseTransitionTestNestedUserFragment$fragmentType,
  +$fragmentSpreads: useRefetchableFragmentNodeWithSuspenseTransitionTestNestedUserFragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useRefetchableFragmentNodeWithSuspenseTransitionTestNestedUserFragment",
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
  (node/*: any*/).hash = "3fc88d644a0a4729fad8c22506a29f36";
}

module.exports = ((node/*: any*/)/*: Fragment<
  useRefetchableFragmentNodeWithSuspenseTransitionTestNestedUserFragment$fragmentType,
  useRefetchableFragmentNodeWithSuspenseTransitionTestNestedUserFragment$data,
>*/);
