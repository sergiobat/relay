/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<ad536b8c4ceeb65b1c9e88f0611573be>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type DataCheckerTest12Fragment$fragmentType: FragmentType;
export type DataCheckerTest12Fragment$ref = DataCheckerTest12Fragment$fragmentType;
export type DataCheckerTest12Fragment$data = {|
  +screennames: ?$ReadOnlyArray<?{|
    +name: ?string,
  |}>,
  +$refType: DataCheckerTest12Fragment$fragmentType,
  +$fragmentType: DataCheckerTest12Fragment$fragmentType,
|};
export type DataCheckerTest12Fragment = DataCheckerTest12Fragment$data;
export type DataCheckerTest12Fragment$key = {
  +$data?: DataCheckerTest12Fragment$data,
  +$fragmentRefs: DataCheckerTest12Fragment$fragmentType,
  +$fragmentSpreads: DataCheckerTest12Fragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DataCheckerTest12Fragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Screenname",
      "kind": "LinkedField",
      "name": "screennames",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "8dd733aeb8f041370136353d0509201c";
}

module.exports = ((node/*: any*/)/*: Fragment<
  DataCheckerTest12Fragment$fragmentType,
  DataCheckerTest12Fragment$data,
>*/);
