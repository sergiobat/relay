/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<541aad4ce9a9fa3dc4c3dd7429e910fe>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RelayMockPayloadGeneratorTestMarkdownUserNameRenderer_name$fragmentType: FragmentType;
export type RelayMockPayloadGeneratorTestMarkdownUserNameRenderer_name$ref = RelayMockPayloadGeneratorTestMarkdownUserNameRenderer_name$fragmentType;
export type RelayMockPayloadGeneratorTestMarkdownUserNameRenderer_name$data = {|
  +markdown: ?string,
  +data: ?{|
    +markup: ?string,
  |},
  +$refType: RelayMockPayloadGeneratorTestMarkdownUserNameRenderer_name$fragmentType,
  +$fragmentType: RelayMockPayloadGeneratorTestMarkdownUserNameRenderer_name$fragmentType,
|};
export type RelayMockPayloadGeneratorTestMarkdownUserNameRenderer_name = RelayMockPayloadGeneratorTestMarkdownUserNameRenderer_name$data;
export type RelayMockPayloadGeneratorTestMarkdownUserNameRenderer_name$key = {
  +$data?: RelayMockPayloadGeneratorTestMarkdownUserNameRenderer_name$data,
  +$fragmentRefs: RelayMockPayloadGeneratorTestMarkdownUserNameRenderer_name$fragmentType,
  +$fragmentSpreads: RelayMockPayloadGeneratorTestMarkdownUserNameRenderer_name$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelayMockPayloadGeneratorTestMarkdownUserNameRenderer_name",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "markdown",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "MarkdownUserNameData",
      "kind": "LinkedField",
      "name": "data",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "markup",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "MarkdownUserNameRenderer",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "8d219e47200e186957568da758755c1f";
}

module.exports = ((node/*: any*/)/*: Fragment<
  RelayMockPayloadGeneratorTestMarkdownUserNameRenderer_name$fragmentType,
  RelayMockPayloadGeneratorTestMarkdownUserNameRenderer_name$data,
>*/);
