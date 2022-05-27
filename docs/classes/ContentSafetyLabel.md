[@phillipchaffee/assemblyai-v2-node-sdk](../README.md) / [Exports](../modules.md) / ContentSafetyLabel

# Class: ContentSafetyLabel

Each label will be returned with a `confidence` score and a `severity` score. It is important to note that these two keys measure two very different things. The `severity` key will produce a score that shows how severe the flagged content is on a scale of `0–1`. For example, a natural disaster with mass casualties would be a `1`, whereas a wind storm that broke a lamppost would be a `0.1`.

In comparison, `confidence` displays how confident the model was in predicting the label it predicted, also on a scale of `0-1`.

We can break this down further by reviewing the following label:
```
    "labels": [
        {
            "label": "health_issues",
            "confidence": 0.8225132822990417,
            "severity": 0.15090347826480865
        }
    ],
```
In the above example, the Content Safety model is indicating it is `82.25%` confident that the spoken content is about Health Issues; however, it is measured at a low severity of `0.1509`. This means the model is very confident the content is about health issues, but the content was not severe in nature (ie, was likely about a minor health issue).

## Table of contents

### Constructors

- [constructor](ContentSafetyLabel.md#constructor)

### Properties

- [confidence](ContentSafetyLabel.md#confidence)
- [label](ContentSafetyLabel.md#label)
- [severity](ContentSafetyLabel.md#severity)

## Constructors

### constructor

• **new ContentSafetyLabel**()

## Properties

### confidence

• `Optional` **confidence**: `number`

How confident the model was in predicting the label it predicted on a scale of 0-1.

#### Defined in

[types/content-safety/content-safety-label.ts:26](https://github.com/PhillipChaffee/assemblyai-node-sdk/blob/ccb7e39/src/types/content-safety/content-safety-label.ts#L26)

___

### label

• `Optional` **label**: `string`

The text description of the safety issue.

#### Defined in

[types/content-safety/content-safety-label.ts:22](https://github.com/PhillipChaffee/assemblyai-node-sdk/blob/ccb7e39/src/types/content-safety/content-safety-label.ts#L22)

___

### severity

• `Optional` **severity**: `number`

A score that shows how severe the flagged content is on a scale of 0–1. For example, a natural disaster with mass casualties would be a 1, whereas a wind storm that broke a lamppost would be a 0.1.

#### Defined in

[types/content-safety/content-safety-label.ts:30](https://github.com/PhillipChaffee/assemblyai-node-sdk/blob/ccb7e39/src/types/content-safety/content-safety-label.ts#L30)