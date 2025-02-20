/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<5feea077d6f086b6ac5caa5fbb1f5428>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RelayModernEnvironmentExecuteMutationWithGlobalInvalidationTestCommentFragment$fragmentType: FragmentType;
export type RelayModernEnvironmentExecuteMutationWithGlobalInvalidationTestCommentFragment$ref = RelayModernEnvironmentExecuteMutationWithGlobalInvalidationTestCommentFragment$fragmentType;
export type RelayModernEnvironmentExecuteMutationWithGlobalInvalidationTestCommentFragment$data = {|
  +id: string,
  +body: ?{|
    +text: ?string,
  |},
  +$refType: RelayModernEnvironmentExecuteMutationWithGlobalInvalidationTestCommentFragment$fragmentType,
  +$fragmentType: RelayModernEnvironmentExecuteMutationWithGlobalInvalidationTestCommentFragment$fragmentType,
|};
export type RelayModernEnvironmentExecuteMutationWithGlobalInvalidationTestCommentFragment = RelayModernEnvironmentExecuteMutationWithGlobalInvalidationTestCommentFragment$data;
export type RelayModernEnvironmentExecuteMutationWithGlobalInvalidationTestCommentFragment$key = {
  +$data?: RelayModernEnvironmentExecuteMutationWithGlobalInvalidationTestCommentFragment$data,
  +$fragmentRefs: RelayModernEnvironmentExecuteMutationWithGlobalInvalidationTestCommentFragment$fragmentType,
  +$fragmentSpreads: RelayModernEnvironmentExecuteMutationWithGlobalInvalidationTestCommentFragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelayModernEnvironmentExecuteMutationWithGlobalInvalidationTestCommentFragment",
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
      "concreteType": "Text",
      "kind": "LinkedField",
      "name": "body",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "text",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Comment",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "0318fbc96ac921a3d0ac67803adb6399";
}

module.exports = ((node/*: any*/)/*: Fragment<
  RelayModernEnvironmentExecuteMutationWithGlobalInvalidationTestCommentFragment$fragmentType,
  RelayModernEnvironmentExecuteMutationWithGlobalInvalidationTestCommentFragment$data,
>*/);
