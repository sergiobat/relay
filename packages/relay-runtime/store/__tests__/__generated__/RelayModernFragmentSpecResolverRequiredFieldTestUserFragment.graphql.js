/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<4de119b3a6cfa9a9c986ac86a179b9d3>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RelayModernFragmentSpecResolverRequiredFieldTestUserFragment$fragmentType: FragmentType;
export type RelayModernFragmentSpecResolverRequiredFieldTestUserFragment$ref = RelayModernFragmentSpecResolverRequiredFieldTestUserFragment$fragmentType;
export type RelayModernFragmentSpecResolverRequiredFieldTestUserFragment$data = ?{|
  +id: string,
  +name: string,
  +alternate_name: string,
  +$refType: RelayModernFragmentSpecResolverRequiredFieldTestUserFragment$fragmentType,
  +$fragmentType: RelayModernFragmentSpecResolverRequiredFieldTestUserFragment$fragmentType,
|};
export type RelayModernFragmentSpecResolverRequiredFieldTestUserFragment = RelayModernFragmentSpecResolverRequiredFieldTestUserFragment$data;
export type RelayModernFragmentSpecResolverRequiredFieldTestUserFragment$key = {
  +$data?: RelayModernFragmentSpecResolverRequiredFieldTestUserFragment$data,
  +$fragmentRefs: RelayModernFragmentSpecResolverRequiredFieldTestUserFragment$fragmentType,
  +$fragmentSpreads: RelayModernFragmentSpecResolverRequiredFieldTestUserFragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelayModernFragmentSpecResolverRequiredFieldTestUserFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      "action": "THROW",
      "path": "name"
    },
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "alternate_name",
        "storageKey": null
      },
      "action": "LOG",
      "path": "alternate_name"
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "15bfebf51ae674d445595318b62ed156";
}

module.exports = ((node/*: any*/)/*: Fragment<
  RelayModernFragmentSpecResolverRequiredFieldTestUserFragment$fragmentType,
  RelayModernFragmentSpecResolverRequiredFieldTestUserFragment$data,
>*/);
