import React, { PureComponent } from 'react'

export interface SpaceProps {
  horizontal?: true | false,
  size?: number,
  /**
   * Background of the space.
   *
   * Used as if like a border.
   */
  color?: string,
}

/**
 * Space
 *
 * UI spacer. Horizontal / Vertical
 *
 * Also works as a border if you pass the `color` prop.
 *
 */
export class Space extends PureComponent<SpaceProps> { }