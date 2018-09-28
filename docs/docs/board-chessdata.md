## Introduction

Properties of chess, chess behavior of Board system.

- Author: Rex
- Behavior of chess

## Source code

Included in [board plugin](board.md#source-code).

## Usage

### Add chess data object

Chess data will be added to game object via `gameObject.rexChess` once adding this game object to board, or attach any chess behavior.

#### Get chess data

```javascript
var chessData = gameObject.rexChess;
```

### Get tile position

```javascript
var tileXYZ = gameObject.rexChess.tileXYZ;
```

or

```javascript
var tileX = gameObject.rexChess.tileX;
var tileY = gameObject.rexChess.tileY;
var tileZ = gameObject.rexChess.tileZ;
```

- `tileXYZ` : Tile position `{x,y,z}`, return `null` if this chess is not added to any board.
- `tileX`, `tileY`, `tileZ` : Return `null` if this chess is not added to any board.

### Get board

```javascript
var board = gameObject.rexChess.board;
```

- `board` : [Board object](board.md), or `null` if this chess is not added to any board.

### Blocker

- Set
    ```javascript
    gameObject.rexChess.setBlocker();
    ```
- Disable
    ```javascript
    gameObject.rexChess.setBlocker(false);
    ```
- Get
    ```javascript
    var blocker = gameObject.rexChess.blocker;
    ```