/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<91fc6230410c26ed8e522bc0dd1ac5fb>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type QueryResourceTest1Fragment$fragmentType: FragmentType;
export type QueryResourceTest1Fragment$ref = QueryResourceTest1Fragment$fragmentType;
export type QueryResourceTest1Fragment$data = {|
  +id: string,
  +$refType: QueryResourceTest1Fragment$fragmentType,
  +$fragmentType: QueryResourceTest1Fragment$fragmentType,
|};
export type QueryResourceTest1Fragment = QueryResourceTest1Fragment$data;
export type QueryResourceTest1Fragment$key = {
  +$data?: QueryResourceTest1Fragment$data,
  +$fragmentRefs: QueryResourceTest1Fragment$fragmentType,
  +$fragmentSpreads: QueryResourceTest1Fragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "QueryResourceTest1Fragment",
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
  (node/*: any*/).hash = "64ec68c5df66664d1369d56db908e8a9";
}

module.exports = ((node/*: any*/)/*: Fragment<
  QueryResourceTest1Fragment$fragmentType,
  QueryResourceTest1Fragment$data,
>*/);
