/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<e23819167ccb667da0fba3fe9e944cdc>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RelayModernEnvironmentExecuteWithStreamAndRequiredTestFeedbackFragment$fragmentType: FragmentType;
export type RelayModernEnvironmentExecuteWithStreamAndRequiredTestFeedbackFragment$ref = RelayModernEnvironmentExecuteWithStreamAndRequiredTestFeedbackFragment$fragmentType;
export type RelayModernEnvironmentExecuteWithStreamAndRequiredTestFeedbackFragment$data = ?{|
  +id: string,
  +actors: $ReadOnlyArray<?{|
    +name: ?string,
  |}>,
  +$refType: RelayModernEnvironmentExecuteWithStreamAndRequiredTestFeedbackFragment$fragmentType,
  +$fragmentType: RelayModernEnvironmentExecuteWithStreamAndRequiredTestFeedbackFragment$fragmentType,
|};
export type RelayModernEnvironmentExecuteWithStreamAndRequiredTestFeedbackFragment = RelayModernEnvironmentExecuteWithStreamAndRequiredTestFeedbackFragment$data;
export type RelayModernEnvironmentExecuteWithStreamAndRequiredTestFeedbackFragment$key = {
  +$data?: RelayModernEnvironmentExecuteWithStreamAndRequiredTestFeedbackFragment$data,
  +$fragmentRefs: RelayModernEnvironmentExecuteWithStreamAndRequiredTestFeedbackFragment$fragmentType,
  +$fragmentSpreads: RelayModernEnvironmentExecuteWithStreamAndRequiredTestFeedbackFragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "enableStream"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelayModernEnvironmentExecuteWithStreamAndRequiredTestFeedbackFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "kind": "Stream",
      "selections": [
        {
          "kind": "RequiredField",
          "field": {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "actors",
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
          },
          "action": "LOG",
          "path": "actors"
        }
      ]
    }
  ],
  "type": "Feedback",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "eafa3357931703c738a27fca219e0e48";
}

module.exports = ((node/*: any*/)/*: Fragment<
  RelayModernEnvironmentExecuteWithStreamAndRequiredTestFeedbackFragment$fragmentType,
  RelayModernEnvironmentExecuteWithStreamAndRequiredTestFeedbackFragment$data,
>*/);
