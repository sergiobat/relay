/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<0ff617e34137bb5787739dbddc6fecef>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type QueryResourceTest4Fragment$fragmentType: FragmentType;
export type QueryResourceTest4Fragment$ref = QueryResourceTest4Fragment$fragmentType;
export type QueryResourceTest4Fragment$data = {|
  +id: string,
  +$refType: QueryResourceTest4Fragment$fragmentType,
  +$fragmentType: QueryResourceTest4Fragment$fragmentType,
|};
export type QueryResourceTest4Fragment = QueryResourceTest4Fragment$data;
export type QueryResourceTest4Fragment$key = {
  +$data?: QueryResourceTest4Fragment$data,
  +$fragmentRefs: QueryResourceTest4Fragment$fragmentType,
  +$fragmentSpreads: QueryResourceTest4Fragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "QueryResourceTest4Fragment",
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
  (node/*: any*/).hash = "ccf6ec5f4f4ab422e8bac9b21bd36e96";
}

module.exports = ((node/*: any*/)/*: Fragment<
  QueryResourceTest4Fragment$fragmentType,
  QueryResourceTest4Fragment$data,
>*/);
