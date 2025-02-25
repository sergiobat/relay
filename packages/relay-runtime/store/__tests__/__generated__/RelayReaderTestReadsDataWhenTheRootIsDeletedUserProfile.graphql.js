/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<f2ba6586ee4a7cb24f79e3edeadfaaa5>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RelayReaderTestReadsDataWhenTheRootIsDeletedUserProfile$fragmentType: FragmentType;
export type RelayReaderTestReadsDataWhenTheRootIsDeletedUserProfile$ref = RelayReaderTestReadsDataWhenTheRootIsDeletedUserProfile$fragmentType;
export type RelayReaderTestReadsDataWhenTheRootIsDeletedUserProfile$data = {|
  +name: ?string,
  +$refType: RelayReaderTestReadsDataWhenTheRootIsDeletedUserProfile$fragmentType,
  +$fragmentType: RelayReaderTestReadsDataWhenTheRootIsDeletedUserProfile$fragmentType,
|};
export type RelayReaderTestReadsDataWhenTheRootIsDeletedUserProfile = RelayReaderTestReadsDataWhenTheRootIsDeletedUserProfile$data;
export type RelayReaderTestReadsDataWhenTheRootIsDeletedUserProfile$key = {
  +$data?: RelayReaderTestReadsDataWhenTheRootIsDeletedUserProfile$data,
  +$fragmentRefs: RelayReaderTestReadsDataWhenTheRootIsDeletedUserProfile$fragmentType,
  +$fragmentSpreads: RelayReaderTestReadsDataWhenTheRootIsDeletedUserProfile$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelayReaderTestReadsDataWhenTheRootIsDeletedUserProfile",
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
  (node/*: any*/).hash = "0c8e161f9c5782db22155b040edaf569";
}

module.exports = ((node/*: any*/)/*: Fragment<
  RelayReaderTestReadsDataWhenTheRootIsDeletedUserProfile$fragmentType,
  RelayReaderTestReadsDataWhenTheRootIsDeletedUserProfile$data,
>*/);
