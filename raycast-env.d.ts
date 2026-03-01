/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `list-instances` command */
  export type ListInstances = ExtensionPreferences & {}
  /** Preferences accessible in the `list-containers` command */
  export type ListContainers = ExtensionPreferences & {}
  /** Preferences accessible in the `list-images` command */
  export type ListImages = ExtensionPreferences & {}
  /** Preferences accessible in the `pull-image` command */
  export type PullImage = ExtensionPreferences & {}
  /** Preferences accessible in the `run-container` command */
  export type RunContainer = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `list-instances` command */
  export type ListInstances = {}
  /** Arguments passed to the `list-containers` command */
  export type ListContainers = {}
  /** Arguments passed to the `list-images` command */
  export type ListImages = {}
  /** Arguments passed to the `pull-image` command */
  export type PullImage = {}
  /** Arguments passed to the `run-container` command */
  export type RunContainer = {}
}

