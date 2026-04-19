const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.solid,
		C3.Behaviors.Bullet,
		C3.Plugins.Text,
		C3.Plugins.Particles,
		C3.Behaviors.Pin,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.ToggleBoolVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Behaviors.Bullet.Acts.Bounce,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetPos,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{fundo: 0},
	{Plataforma: 0},
	{CentrarEm: 0},
	{heroi: 0},
	{Sólido: 0},
	{chao: 0},
	{Projétil: 0},
	{monstro: 0},
	{chave: 0},
	{portaportal: 0},
	{Texto: 0},
	{irma: 0},
	{Partículas: 0},
	{monstro2: 0},
	{Sprite: 0},
	{portaportal2: 0},
	{Fixar: 0},
	{txtchave: 0},
	{temChave: 0}
];

self.InstanceType = {
	fundo: class extends self.ISpriteInstance {},
	heroi: class extends self.ISpriteInstance {},
	chao: class extends self.ISpriteInstance {},
	monstro: class extends self.ISpriteInstance {},
	chave: class extends self.ISpriteInstance {},
	portaportal: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	irma: class extends self.ISpriteInstance {},
	Partículas: class extends self.IParticlesInstance {},
	monstro2: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	portaportal2: class extends self.ISpriteInstance {},
	txtchave: class extends self.ITextInstance {}
}